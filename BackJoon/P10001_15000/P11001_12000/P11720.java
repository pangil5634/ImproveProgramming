import java.util.Scanner;

public class P11720 {
    public static void main(String[] args) {
        P11720 main = new P11720();

        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        int count = sc.nextInt();
        count = count + 0;

        String temp = sc.next();

        String[] temps = temp.split("");

        int result = 0;
        for (int i = 0; i < temps.length; i++) {
            result += Integer.parseInt(temps[i]);
        }

        System.out.println(result);
    }
}
