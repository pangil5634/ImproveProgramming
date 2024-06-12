import java.util.Scanner;

public class P10952 {
    public static void main(String[] args) {
        P10952 main = new P10952();
        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        while (true) {

            int n1 = sc.nextInt();
            int n2 = sc.nextInt();

            if (n1 == 0 && n2 == 0)
                break;

            if (0 < n1 && n1 < 10 && 0 < n2 && n2 < 10)
                System.out.println(n1 + n2);

        }
    }
}
