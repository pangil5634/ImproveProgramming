import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P10809 {
    public static void main(String[] args) {
        P10809 main = new P10809();
        main.run();
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    String str = "";

    int[] alpha = new int[26];
    char[] strTemp;

    void run() {
        initAlpha();
        getString();
        splitString();
        printResult();

    }

    void getString() {
        try {
            str = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    void initAlpha() {
        for (int i = 0; i < alpha.length; i++) {
            alpha[i] = -1;
        }
    }

    void splitString() {
        strTemp = str.toCharArray();

        for (int i = 0; i < strTemp.length; i++) {
            int temp = strTemp[i] - 97;
            if (alpha[temp] == -1) {
                alpha[temp] = i;
            }
        }
    }

    void printResult() {
        for (int i = 0; i < alpha.length; i++) {
            System.out.print(alpha[i] + " ");
        }
    }
}
