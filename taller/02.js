function operations( operador, numero1 , numero2 ){
    let resultado;
    switch(operador){
        case "+":
          resultado= numero1 + numero2;
            break
       
        case "-":
            resultado= numero1 - numero2;
            break
   
        case "*":
            resultado= numero1 * numero2;
            break
   
            case "/":
                if ( numero2 == 0 ) {
                    alert ( 'No se puede dividir entre 0' );s
                    break;
                } 
     
                    resultado= numero1 / numero2;
     
                break;
     
            default:
                console.log( "Opción inválida. Inténtalo nuevamente." );
     

    }
    return resultado;
}

 console.log(operations('*',5,5));