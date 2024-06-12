import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P10430 {
    int A, B, C;
    int result1, result2, result3, result4;

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) {
        P10430 main = new P10430();

        main.run();
    }

    void run() {
        getNumber();
        calculate();
        printResult();
    }

    void getNumber() {
        try {
            String[] temp = br.readLine().split(" ");
            A = Integer.parseInt(temp[0]);
            B = Integer.parseInt(temp[1]);
            C = Integer.parseInt(temp[2]);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    void calculate() {
        result1 = (A + B) % C;
        result2 = ((A % C) + (B % C)) % C;
        result3 = (A * B) % C;
        result4 = ((A % C) * (B % C)) % C;
    }

    void printResult() {
        System.out.println(result1);
        System.out.println(result2);
        System.out.println(result3);
        System.out.println(result4);
    }
}
