package Section09InnerAndAbstractClassesAndInterfaces.InnerClassesPart2_128;

public class Button {
    private String title;
    private OnClickListener onClickListener;

    public Button(String title) {
        this.title = title;
    }

    /**
     * @return String return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param OnClickListener the OnClickListener to set
     */
    public void setOnClickListener(OnClickListener onClickListener) {
        this.onClickListener = onClickListener;
    }

    public void onClick() {
        this.onClickListener.onClick(this.title);
    }

    public interface OnClickListener {
        public void onClick(String title);
    }

}