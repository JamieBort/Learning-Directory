// from: http://code-exercises.com/programming/easy/15/reverse-string

public class String reverse(String s) {
    String result = "";
    for (int i = 0; i < s.length(); i++) {
        result += s.charAt(s.length() - i - 1);
    }
    return s;
}