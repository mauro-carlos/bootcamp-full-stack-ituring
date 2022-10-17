let diasDaSemana = (numeroDias) => {    
    switch (numeroDias) {
      case 01 :
        console.log(`segunda-feira`);
        break;
        case 02 :
            console.log(`terça-feira`);
            break;
            case 03 :
        console.log(`Quarta-feira`);
        break;
        case 04 :
        console.log(`Quinta-feira`);
        break;
        case 05 :
        console.log(`sexta-feira`);
        break;
        case 06 :
        console.log(`Sábado`);
        break;
        case 07 :
        console.log(`Domingo`);
        break;        
        break;
      default:
        console.log(`O número ${numeroDias} não é válido para dia de semana`);
        }
    
    }
    diasDaSemana (07);
    diasDaSemana (09);
    diasDaSemana (05);
    diasDaSemana (03);
    