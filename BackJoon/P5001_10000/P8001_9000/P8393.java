import java.util.Scanner;

public class P8393 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int count = sc.nextInt();
            int result = 0;
            for (int i = 1; i <= count; i++) {
                result += i;

            }
            System.out.println(result);
        }
    }
}
