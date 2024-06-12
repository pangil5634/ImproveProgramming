import java.util.Scanner;

public class P10950 {
    public static void main(String[] args) {
        P10950 main = new P10950();

        main.run();

    }

    Scanner sc = new Scanner(System.in);

    void run() {
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            int n1 = sc.nextInt();
            int n2 = sc.nextInt();

            System.out.println(n1 + n2);
        }
    }
}
