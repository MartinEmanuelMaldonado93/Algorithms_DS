void printDigit(int digit)
{
  digitalWrite(A, LOW);
  digitalWrite(B, LOW);
  digitalWrite(C, LOW);
  digitalWrite(D, LOW);
  digitalWrite(E, LOW);
  digitalWrite(F, LOW);
  digitalWrite(G, LOW);
  
  switch (digit)
  {
  	case 1:
  	{
        digitalWrite(D, HIGH);
 	    digitalWrite(G, HIGH);
      	break;
  	}
    case 2:
  	{
        digitalWrite(C, HIGH);
        digitalWrite(D, HIGH);
        digitalWrite(A, HIGH);
        digitalWrite(E, HIGH);
        digitalWrite(F, HIGH);
      
      	break;
  	}
  
    case 3:
  	{
        digitalWrite(A, HIGH);        
        digitalWrite(C, HIGH);
        digitalWrite(D, HIGH);
        digitalWrite(G, HIGH);
     	digitalWrite(F, HIGH);
      	break;
  	}
    case 4:
  	{
        digitalWrite(A, HIGH);
        digitalWrite(B, HIGH);
        digitalWrite(D, HIGH);
        digitalWrite(G, HIGH);
      	break;
  	}
    
    case 5:
  	{
        digitalWrite(A, HIGH);
        digitalWrite(B, HIGH);
      	digitalWrite(C, HIGH);
        digitalWrite(G, HIGH);
        digitalWrite(F, HIGH);
      	break;
  	}
    case 6:
  	{
        digitalWrite(A, HIGH);
        digitalWrite(B, HIGH);
      	digitalWrite(C, HIGH);
        digitalWrite(G, HIGH);
        digitalWrite(F, HIGH);
        digitalWrite(E, HIGH);
      	break;
  	}
    
    case 7:
  	{
        digitalWrite(C, HIGH);
        digitalWrite(D, HIGH);
        digitalWrite(G, HIGH);
      	break;
  	}
     case 8:
  	{
        digitalWrite(A, HIGH);
        digitalWrite(B, HIGH);
        digitalWrite(C, HIGH);
        digitalWrite(D, HIGH);
        digitalWrite(E, HIGH);
        digitalWrite(F, HIGH);
        digitalWrite(G, HIGH);
      	break;
  	} 
     case 9:
  	{
        digitalWrite(A, HIGH);
        digitalWrite(B, HIGH);
        digitalWrite(C, HIGH);
        digitalWrite(D, HIGH);        
        digitalWrite(G, HIGH);
      	break;
  	} 
    
      case 0:
  	{
        digitalWrite(A, LOW);
        digitalWrite(B, HIGH);
        digitalWrite(C, HIGH);
        digitalWrite(D, HIGH);
        digitalWrite(E, HIGH);
        digitalWrite(F, HIGH);
     	digitalWrite(G, HIGH);
      	break;
  	}
  }
}

void prendeDigito(int digito) // activo o desactivo los paneles
{
	if (digito == UNIDAD)	  
    {
        digitalWrite(UNIDAD, LOW); // 0 enciendo UNIDAD
        digitalWrite(DECENA, HIGH); // pongo decena en 1 (no enciende)
      	delay(TIMEDISPLAYON); // 10 mili seg
    }
  	else if (digito == DECENA)
    {
        digitalWrite(UNIDAD, HIGH); // apago unidad
        digitalWrite(DECENA, LOW);// pone 0 se descarga y prende dec
      	delay(TIMEDISPLAYON);// se apaga por 10 milisegundos.
    }
  else
  	{
        digitalWrite(UNIDAD, HIGH); //los apago a los dos
        digitalWrite(DECENA, HIGH);//los apago a los dos
    }
}


void printCount(int count) 
{				//EJ 23
  	prendeDigito(APAGADOS);//le digo que no prenda nada aun 
	printDigit(count/10);//  23/10= 2 prendo la parte de la decena lotro no
  	prendeDigito(DECENA);//le digo que encienda la decena unicamente por unos miliseg
  
    prendeDigito(APAGADOS); // apago todo 
 	printDigit(count - 10*((int)count/10)); //que prenda la parte unidad 23-20=3
  	prendeDigito(UNIDAD); 
}
