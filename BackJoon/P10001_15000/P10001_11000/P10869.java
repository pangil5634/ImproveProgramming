import java.util.Scanner;

public class P10869 {

    int num1, num2;

    Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        P10869 main = new P10869();

        main.run();
    }

    void run() {
        getNumber();
        printResult();
    }

    void getNumber() {
        num1 = sc.nextInt();
        num2 = sc.nextInt();
    }

    void printResult() {
        System.out.println(num1 + num2);
        System.out.println(num1 - num2);
        System.out.println(num1 * num2);
        System.out.println(num1 / num2);
        System.out.println(num1 % num2);
    }
}
