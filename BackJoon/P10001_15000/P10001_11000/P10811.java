import java.util.Scanner;

public class P10811 {

    public static void main(String[] args) {

        P10811 main = new P10811();
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
            int repeat = (n2 - n1 + 1) / 2;
            int index1 = n1 - 1;
            int index2 = n2 - 1;
            for (int j = 0; j < repeat; j++) {
                temp = baskets[index1];
                baskets[index1] = baskets[index2];
                baskets[index2] = temp;
                index1++;
                index2--;
            }

        }
        for (int i = 0; i < baskets.length; i++) {
            System.out.print(baskets[i] + " ");
        }
    }
}
