import java.util.Scanner;

public class P25304 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int data = sc.nextInt();
            int count = sc.nextInt();
            int result = 0;

            for (int i = 0; i < count; i++) {
                int price = sc.nextInt();
                int counts = sc.nextInt();

                result += price * counts;
            }

            if (data == result) {
                System.out.println("Yes");
            } else {
                System.out.println("No");
            }
        }
    }
}
