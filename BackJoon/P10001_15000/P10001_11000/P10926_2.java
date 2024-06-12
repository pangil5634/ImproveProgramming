import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

class P10926_2 {

    String input;
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) {
        P10926_2 main = new P10926_2();

        main.getInput();
    }

    void getInput() {
        try {
            input = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String result = input + "??!";
        System.out.println(result);
    }

}