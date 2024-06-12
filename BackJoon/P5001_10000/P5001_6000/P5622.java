import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P5622 {
    public static void main(String[] args) {
        P5622 main = new P5622();
        main.run();
    }

    void run() {
        getString();
        calculate();
    }

    String str = "";
    int[] strIndex;
    int time = 0;

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    void getString() {
        try {
            str = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        strIndex = new int[str.length()];
        for (int i = 0; i < str.length(); i++) {
            strIndex[i] = str.charAt(i);
        }

    }

    void calculate() {
        for (int i = 0; i < strIndex.length; i++) {

            if (strIndex[i] <= 67) {
                time += 3;
            } else if (strIndex[i] <= 70) {
                time += 4;
            } else if (strIndex[i] <= 73) {
                time += 5;
            } else if (strIndex[i] <= 76) {
                time += 6;
            } else if (strIndex[i] <= 79) {
                time += 7;
            } else if (strIndex[i] <= 83) {
                time += 8;
            } else if (strIndex[i] <= 86) {
                time += 9;
            } else if (strIndex[i] <= 90) {
                time += 10;
            }
        }
        System.out.println(time);
    }

}
