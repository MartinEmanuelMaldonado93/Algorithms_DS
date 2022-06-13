// C++ code
// 
#define RGB1 11 77NROJ
#define RGB2 10
#define RGB3 9

#define A 6
#define B 7  
#define D A3
#define E A5
#define C A2 
#define F 5
#define G 4  
// abdecfg

#define Decena 3
#define Unidad 2
#define POTENCIOMETRO A4
int i =0;
int intensidad =0;
int gradosTransformados;

void setup()
{
  Serial.begin(9600);
  pinMode(RGB1, OUTPUT);
  pinMode(RGB2, OUTPUT);
  pinMode(RGB3, OUTPUT);
  // abdecfg
  pinMode(A, OUTPUT);
  pinMode(B, OUTPUT); 
  pinMode(C, OUTPUT); 
  pinMode(D, OUTPUT);
  pinMode(E, OUTPUT); 
  pinMode(F, OUTPUT); 
  pinMode(G, OUTPUT); 
  // ground
  pinMode(Unidad, OUTPUT);
  pinMode(Decena, OUTPUT);
   
  digitalWrite(Unidad, 0);
  digitalWrite(Decena, 1);  
 
} 
void loop()
{
  intensidad = analogRead(POTENCIOMETRO);
  gradosTransformados = map(intensidad, 0, 1023, 99, 0);
  //Serial.println(gradosTransformados);
  printDigit(6);
  delay(500);
  //CONFIGURACION RGB
  if(gradosTransformados <= 33)
  {
    digitalWrite(RGB1,LOW);
    digitalWrite(RGB2,LOW);
    digitalWrite(RGB3,HIGH);
  }
  
}

void printDigit(int digit)
{ // abcdefg
  digitalWrite(A, LOW);
  digitalWrite(B, LOW);
  digitalWrite(C, LOW);
  digitalWrite(D, LOW);
  digitalWrite(E, LOW);
  digitalWrite(F, LOW);
  digitalWrite(G, LOW);
  
  switch (digit)
  {
      case 0:
  	{
        digitalWrite(A, 1);
        digitalWrite(B, 1);
        digitalWrite(C, 1);
        digitalWrite(D, 1);
        digitalWrite(E, 1);
        digitalWrite(F, 1);
     	digitalWrite(G, 0);
      	break;
  	}
  	case 1:
  	{
        digitalWrite(A, 0);
        digitalWrite(B, 1);
        digitalWrite(C, 1);
        digitalWrite(D, 0);
        digitalWrite(E, 0);
        digitalWrite(F, 0);
     	digitalWrite(G, 0);
      	break;
  	}
    case 2:
  	{
        digitalWrite(A, 1);
        digitalWrite(B, 1);
        digitalWrite(C, 0);
        digitalWrite(D, 1);
        digitalWrite(E, 1);
        digitalWrite(F, 0);
     	digitalWrite(G, 1);
      
      	break;
  	}
  
    case 3:
  	{
       digitalWrite(A, 1);
        digitalWrite(B, 1);
        digitalWrite(C, 1);
        digitalWrite(D, 1);
        digitalWrite(E, 0);
        digitalWrite(F, 0);
     	digitalWrite(G, 1);
      	break;
  	}
    case 4:
  	{
       digitalWrite(A, 0);
        digitalWrite(B, 1);
        digitalWrite(C, 1);
        digitalWrite(D, 0);
        digitalWrite(E, 0);
        digitalWrite(F, 1);
     	digitalWrite(G, 1);
      	break;
  	}
    
    case 5:
  	{
        digitalWrite(A, 1);
        digitalWrite(B, 0);
        digitalWrite(C, 1);
        digitalWrite(D, 1);
        digitalWrite(E, 0);
        digitalWrite(F, 1);
     	digitalWrite(G, 1);
      	break;
  	}
    case 6:
  	{
        digitalWrite(A, 1); 
      	digitalWrite(F, 1);
        digitalWrite(G, 1);
        digitalWrite(E, 1);
        digitalWrite(C, 1);
      	digitalWrite(D, 1);
      	break;
  	}
    
    case 7:
  	{
        digitalWrite(A, 1);
        digitalWrite(B, 1);
        digitalWrite(C, 1);
      	break;
  	}
     case 8:
  	{
        digitalWrite(A, 1);
        digitalWrite(B, 1);
        digitalWrite(C, 1);
        digitalWrite(D, 1);
        digitalWrite(E, 1);
        digitalWrite(F, 1);
        digitalWrite(G, 1);
      	break;
  	} 
     case 9:
  	{
        digitalWrite(A, 1);
        digitalWrite(B, 1);
        digitalWrite(F, 1);
        digitalWrite(G, 1);        
        digitalWrite(C, 1);
      	break;
  	}  
  }
}

/*void printCount(int count) 
{  
	printDigit(count/10);
    digitalWrite(Unidad, 0);
	   
    digitalWrite(Decena, 1); 
    //prendeDigito(0); 
 	printDigit(count - 10*((int)count/10)); 
  	prendeDigito(Unidad); 
}*/