import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class P11966 {
    public static void main(String[] args) throws IOException {
        P11966 main = new P11966();
        main.run();
    }

    void run() throws IOException {
        WayScanner();
        // WayBufferReader();

    }

    void WayScanner() {
        try (Scanner sc = new Scanner(System.in)) {
            int num = sc.nextInt();
            checkIfPowerOfTwo(num);
        }
    }

    void WayBufferReader() throws IOException {
        try (BufferedReader sc = new BufferedReader(new InputStreamReader(System.in))) {
            String num = sc.readLine();
            checkIfPowerOfTwo(Integer.parseInt(num));
        }
    }

    void checkIfPowerOfTwo(int num) {
        if (num == 0) {
            System.out.println("0");
        } else if ((num & (num - 1)) == 0) {
            System.out.println("1");
        } else {
            System.out.println("0");
        }
    }
}
