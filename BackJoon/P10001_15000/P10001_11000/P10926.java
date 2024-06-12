import java.util.Scanner;

class P10926 {

	String input;
	Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		P10926 main = new P10926();

		main.getInput();
	}

	void getInput() {
		input = sc.next();
		String result = input + "??!";
		System.out.println(result);
	}

}