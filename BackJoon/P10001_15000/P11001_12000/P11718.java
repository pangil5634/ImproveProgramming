import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P11718 {
    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = "";
        try {
            while ((str = br.readLine()) != null) {

                System.out
                        .println(str);
            }
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
