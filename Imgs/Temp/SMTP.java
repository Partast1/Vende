import java.util.List;

public class SMTP extends MessageSender {

    public SMTP(String to, String from, String body, String subject) {
        super(to, from, body, subject);
    }


    @Override
    String toString(String s) {
        return " " + s;
    }

    @Override
    void sendMessage(String m) {
        toString(m);
    }
}
