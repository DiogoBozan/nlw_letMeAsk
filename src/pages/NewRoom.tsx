import { FormEvent, useState } from "react";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import "../styles/auth.scss";

export function NewRoom() {
    const { user } = useAuth();
    const navigate = useNavigate();


    const [newRoom, setNewRoom] = useState("");

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === "") {
            return;
        }

        const roomRef = database.ref("rooms");

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        navigate(`/rooms/${firebaseRoom.key}`)

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvias da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type="text" placeholder="Nome da sala" onChange={event => setNewRoom(event.target.value)}
                            value={newRoom} />
                        <Button type="submit">Criar sala</Button>
                        <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                    </form>
                </div>
            </main>
        </div>
    )
}