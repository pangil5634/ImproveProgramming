import java.util.HashSet;
import java.util.Scanner;

public class P5597 {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            HashSet<Integer> data = new HashSet<>();

            for (int i = 0; i < 28; i++) {
                data.add(sc.nextInt());
            }

            int max = 0;
            int min = 30;
            for (int i = 0; i < 30; i++) {
                if (!data.contains(i + 1)) {
                    if (i + 1 < min) {
                        min = i + 1;
                    }
                    if (i + 1 > max) {
                        max = i + 1;
                    }
                }
            }

            System.out.println(min);
            System.out.println(max);
        }
    }
}
