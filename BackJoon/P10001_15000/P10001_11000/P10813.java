import java.util.Scanner;

public class P10813 {

    public static void main(String[] args) {
        P10813 main = new P10813();
        main.run();

    }

    Scanner sc = new Scanner(System.in);

    void run() {

        int basket = sc.nextInt();

        int[] baskets = new int[basket];

        int count = sc.nextInt();

        for (int i = 0; i < baskets.length; i++) {
            baskets[i] = i + 1;
        }

        for (int i = 0; i < count; i++) {
            int n1 = sc.nextInt();
            int n2 = sc.nextInt();

            int temp = 0;

            temp = baskets[n1 - 1];
            baskets[n1 - 1] = baskets[n2 - 1];
            baskets[n2 - 1] = temp;
        }
        for (int i = 0; i < baskets.length; i++) {
            System.out.print(baskets[i] + " ");
        }
    }
}
