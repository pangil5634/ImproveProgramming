import java.util.Scanner;

public class P27866 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            String str = sc.next();
            int index = sc.nextInt();

            System.out.println(str.charAt(index - 1));
        }
    }
}
