import React,{useState} from 'react';
import ChatBot from 'react-simple-chatbot';
import useAuth from '../../hooks/useAuth';
import botImg from '../../image/imagen_logotipo.png';

function Chatbot() {
  const { user } = useAuth();
  const [data, setData] = useState({
    stress:'',
    anxiety:'',
    sadness:''
  });
  console.log(user);
  
  
  return (
    <div className=" w-full md:m-auto md:w-1/3">
    
      <ChatBot
        botAvatar={botImg}
        headerTitle="Fame"
        placeholder="Habla conmigo..."
        
      
        steps={[
          {
            id: '1',
            message: `Hola ${user.name} me alegra verte por aquí!`,
            trigger: '2',
            hideInput: true,
          },
          {
            id: '2',
            message: '¿Cómo ha ido tu dia?',
            trigger: '3',
          },
          {
            id: '3',
            options: [
              { value: 1, label: 'Ha estado muy bien!', trigger: '4' },
              { value: 2, label: 'Tuve un dia regular', trigger: '10' },
              { value: 3, label: 'No ha sido buen dia', trigger: '5' },
            ],
            hideInput: true,
          },
          {
            id: '4',
            message: 'Me alegra mucho saberlo, ¿quieres contarme mas?',
            trigger: '6',
            hideInput: true,
          },
          {
            id: '5',
            message: 'Oh ¿porque ha estado mal? ¿Quieres hablar de ello?',
            trigger: '9',
          },
          {
            id: '6',
            options: [
              { value: 1, label: 'Si!', trigger: '21' },
              {
                value: 2,
                label: 'La verdad que ahora no, quizá luego',
                trigger: '8',
              },
            ],
          },
          {
            id: '7',
            user: true,
            trigger: '11',
          },

          {
            id: '11',
            message:
              '[{previousValue}] Por lo que veo esto te ha afectado en tu dia, procederé a hacerte algunas preguntas',
            trigger: '12',
          },
          {
            id: '8',
            message: 'Oh entiendo, estaré por aqui si necesitas algo',
            end: true,
          },
          {
            id: '9',
            options: [
              { value: 1, label: 'Si, me gustaria desahogarme', trigger: '7' },
              {
                value: 2,
                label: 'La verdad que ahora no, quizá luego',
                trigger: '8',
              },
            ],
          },
          {
            id: '10',
            message: 'Oh ¿porque ha estado regular? ¿Quieres hablar de ello?',
            trigger: '9',
          },

          {
            id: '12',
            message: 'Que nivel de estrés te ha generado la situación',
            trigger: '13',
            hideInput: true,
          },
          {
            id: '13',
            options: [
              { value: 1, label: '1-Muy poco', trigger: '14' },
              { value: 2, label: '2', trigger: '14' },
              { value: 3, label: '3', trigger: '14' },
              { value: 3, label: '3', trigger: '14' },
              { value: 4, label: '4', trigger: '14' },
              { value: 5, label: '5- Me ha afectado mucho', trigger: '14' },
            ],
            hideInput: true,
          },
          {
            id: '14',
            message: 'Que nivel de ansiedad te ha generado la situación',
            trigger: '16',
            hideInput: true,
          },
          {
            id: '16',
            options: [
              { value: 1, label: '1-Muy poco', trigger: '17' },
              { value: 2, label: '2', trigger: '17' },
              { value: 3, label: '3', trigger: '17' },
              { value: 4, label: '4', trigger: '17' },
              { value: 5, label: '5- Me ha afectado mucho', trigger: '17' },
            ],
            hideInput: true,
            
          },
          {
            id: '17',
            message: 'Que nivel de tristeza te ha generado la situación',
            trigger: '18',
            hideInput: true,
          },
          {
            id: '18',
            options: [
              { value: 1, label: '1-Muy poco', trigger: '20' },
              { value: 2, label: '2', trigger: '20' },
              { value: 3, label: '3', trigger: '20' },
              { value: 4, label: '4', trigger: '20' },
              { value: 5, label: '5- Me ha afectado mucho', trigger: '20' },
            ],
            hideInput: true,
          },
          
          {
            id: '20',
            message:
              'Bien, analizaré esto que me has contado y te enviaré un diagnostico',
            end: true,
          },
          {
            id: '21',
            user: true,
            trigger: '22',
          },
          {
            id: '22',
            message:
              'Me alegra que hayas tenido un buen dia, sigue asi y estaré aqui para lo que necesites :D',
            end: true,
          },
        ]}
      />
      
    </div>
  );
}
export default Chatbot;
