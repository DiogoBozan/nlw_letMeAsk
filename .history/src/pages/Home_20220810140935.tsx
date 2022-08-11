import illustrationImg from "../assets/images/illustration.svg";

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvias da sua audiência em tempo real;</p>
            </aside>
        </div>
    )
}