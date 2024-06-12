import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P18108 {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) {
        P18108 main = new P18108();

        main.run();
    }

    void run() {
        getYear();
    }

    void getYear() {
        int year = 0;
        try {
            year = Integer.parseInt(br.readLine());
        } catch (NumberFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        year -= 543;
        System.out.println(year);

    }
}
