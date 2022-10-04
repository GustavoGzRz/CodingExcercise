import java.util.Scanner;

public class MangosNaranjas {
	
	int n;
	int m;
	int cajas;
	int mc;
	int nc;
	
	//Metodo para leer los datos ingresados
	public void leer() {
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Ingresa la cantidad de mangos");
		m = entrada.nextInt();
		System.out.println("Ingresa la cantidad de naranjas");
		n = entrada.nextInt();
		entrada.close();
		System.out.println("Mangos = "+m +"\nNaranjas = "+n);
		mc=m;
		nc=n;
		
		while (m!=n) {
			if (m>n) {
				m=m-n;
			} else {
				n = n-m;
			}//else
			
		}//while
		System.out.println("El número máximo de cajas es: "+ m +" cajas");
		System.out.println("El número de mangos por caja es de: "+ mc/m);
		System.out.println("El número de naranjas por caja es de: "+ nc/m);
		

		//naranjas 12028
		//mangos 12772
		//cajas 124

	}


}
