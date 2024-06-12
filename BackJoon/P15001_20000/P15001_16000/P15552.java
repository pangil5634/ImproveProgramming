import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class P15552 {
    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        try {

            int count = Integer.parseInt(br.readLine());
            for (int i = 0; i < count; i++) {
                String temp = br.readLine();
                String[] temps = temp.split(" ");
                int n1 = Integer.parseInt(temps[0]);
                int n2 = Integer.parseInt(temps[1]);

                bw.write(n1 + n2 + "\n");
            }
            br.close();
            bw.flush();
            bw.close();

        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
}
