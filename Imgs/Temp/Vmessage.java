import java.util.List;

public class Vmessage extends MessageSender {

    public Vmessage(String to, String from, String body, String subject) {
        super(to, from, body, subject);
    }

    @Override
    String toString(String s) {
        return " " + s;
    }

    @Override
    void sendMessage(String m) {

    }
}
