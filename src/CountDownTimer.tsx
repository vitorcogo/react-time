import React from 'react'

// Definição de propriedades necessárias para o funcionando adequado do componente. (Horas, Minutos e Segundos)
interface CountDownProps {
    hours: number;
    minutes: number;
    seconds: number;
}

// Criação do componente através de uma função
const CountDownTimer = (props: CountDownProps) => {
    
    // Utilização do useState para controlar o estado da variavel "time", para que sempre fique atualizada conforme o ciclo de vida do componente.
    const [ time, setTime ] = React.useState<CountDownProps>(props);
    const { hours, minutes, seconds } = time;

    // Função que executa a lógica para definir o tempo restante.
    const getTime = () => {
        if (hours === 0 && minutes === 0 && seconds === 0) 
            reset()
        else if (minutes === 0 && seconds === 0) 
            setTime({hours: hours - 1, minutes: 59, seconds: 59});
        else if (seconds === 0) 
            setTime({hours, minutes: minutes - 1, seconds: 59});
        else 
            setTime({hours, minutes, seconds: seconds - 1});
    };

    const reset = () => setTime({hours, minutes, seconds});
    
    // Utilização do useEffect para chamar a função "getTime" quando o estado do componente atualizar.
    React.useEffect(() => {
        const timerId = setInterval(() => getTime(), 1000);
        return () => clearInterval(timerId);
    });

    // Formatar os valores do tempo para renderizar na tela.
    const formatHours = hours.toString().padStart(2, '0');
    const formatMinutes = minutes.toString().padStart(2, '0');
    const formatSeconds = seconds.toString().padStart(2, '0');

    const formatTime = `${formatHours}:${formatMinutes}:${formatSeconds}`;
    
    // Retornar "interface" que será renderizada.
    return (
        <div>
            <p>{formatTime}</p> 
        </div>
    );
}
// Exportando a função para definir o componente.
export default CountDownTimer;