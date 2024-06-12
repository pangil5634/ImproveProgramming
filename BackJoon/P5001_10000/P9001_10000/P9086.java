import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P9086 {
    public static void main(String[] args) {
        P9086 main = new P9086();

        main.run();
    }

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    void run() {
        int count = 0;

        try {
            count = Integer.parseInt(br.readLine());
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        for (int i = 0; i < count; i++) {
            String str = "";
            str = getString(str);
            printLength(str);
        }
    }

    String getString(String str) {
        try {
            str = br.readLine();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return str;
    }

    void printLength(String str) {
        System.out.println(str.charAt(0) + "" + str.charAt(str.length() - 1));
    }

}
