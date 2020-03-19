import java.util.List;

abstract class MessageSender {
    private String to, from, body, subject;
    private List<String> cc;

//    Construktor for single reciever
    public MessageSender(String to, String from, String body, String subject)
    {
        this.to = to;
        this.from = from;
        this.body = body;
        this.subject = subject;

    }
    //    Construktor for multi reciever
    public MessageSender(List<String> cc, String from, String body, String subject)
    {
        this.cc = cc;
        this.from = from;
        this.body = body;
        this.subject = subject;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getSubject() {
        return subject;
    }

    public List<String> getCc() {
        return cc;
    }

    public void setCc(List<String> CC) {
        this.cc = CC;
    }

    //ConvertBodyToHTML
    abstract String toString(String s);
    abstract void sendMessage(String m);


}
