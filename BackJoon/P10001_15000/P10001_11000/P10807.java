import java.util.Scanner;

public class P10807 {

    public static void main(String[] args) {
        P10807 main = new P10807();
        main.run();
    }

    Scanner sc = new Scanner(System.in);

    void run() {
        int count = sc.nextInt();
        int[] numbers = new int[count];

        for (int i = 0; i < count; i++) {
            numbers[i] = sc.nextInt();
        }

        int temp = sc.nextInt();
        int same = 0;
        for (int i = 0; i < count; i++) {
            if (temp == numbers[i]) {
                same++;
            }
        }
        System.out.println(same);

    }
}