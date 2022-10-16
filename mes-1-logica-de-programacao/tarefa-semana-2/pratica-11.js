let coresRgb = (cor) => {    
switch (cor) {
  case 'vermelha':
    console.log(`vermelha -> rgb(255,0,0)`);
    break;
    case 'laranja':
        console.log(`laranja -> rgb(255,128,0)`);
        break;
        case 'amarela':
    console.log(`amarela -> rgb(255,255,0)`);
    break;
    case 'verde':
    console.log(`verde -> rgb(,255,255)`);
    break;
    case 'azul claro':
    console.log(`azul claro -> rgb(0,255,255)`);
    break;
    case 'azul marinho':
    console.log(`azul marinho -> rgb(0,0,255)`);
    break;
    case 'rosa':
    console.log(`rosa -> rgb(255,0,255)`);
    break;
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${cor}.`);
    }

}
coresRgb ("vermelha");
coresRgb ("laranja");
coresRgb ("verde");
coresRgb ("azul claro");
coresRgb ("lilas");