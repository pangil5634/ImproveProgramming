import java.util.Scanner;

public class P27323 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int width = sc.nextInt();
            int height = sc.nextInt();

            System.out.println(width * height);
        }
    }
}
