import java.util.Scanner;

public class P10951 {
    public static void main(String[] args) {
        P10951 main = new P10951();
        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {

        while (sc.hasNextInt()) {

            int n1 = sc.nextInt();
            int n2 = sc.nextInt();

            if (0 < n1 && n1 < 10 && 0 < n2 && n2 < 10)
                System.out.println(n1 + n2);

        }
    }
}
