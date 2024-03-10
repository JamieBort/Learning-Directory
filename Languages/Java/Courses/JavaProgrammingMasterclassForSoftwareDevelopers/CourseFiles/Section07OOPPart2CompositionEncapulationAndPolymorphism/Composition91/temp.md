computer
    computer has a motherboard
    computer has a monitor 
        monitor class has a resolution
    computer has a case 
        case has a Dimensions

---

Create a class that is comprised of the case, the monitor and the motherboard.
    Instantiate a motherboard, instantiate a monitor, and instantiate a case.
    
    ~~fields~~:
        ~~private motherboard~~
        ~~private monitor~~
        ~~private case~~

---

    computer has a motherboard // create this as a class
        create fields as usual
            private String ...
            private int ...
            etc.
        create public constructor as usual
        getters and setters as usual
        create one public method (program is loading...)
    computer has a monitor // create this as a class
        create fields as usual
            private String ...
            private int ...
            etc.
            create class for field (resolution class) // monitor has a resolution
        create public constructor as usual
        create one public method (drawing pixel at ...)
        getters and setters as usual
    create resolution class
        create fields as usual
            private String ...
            private int ...
            etc.
            private int width
            private int height
        create public constructor as usual
        getters and setters as usual
    computer has a case // create this as a class
        create fields as usual
            private String ...
            private int ...
            etc.
            create class for field (Dimensions class) // case has a dimensions
        create public constructor as usual
        create one public method (press power button...)
        getters and setters as usual
    create Dimensions class
        create fields as usual
            private String ...
            private int ...
            etc.
            private int width
            private int height
            private int depth
        create public constructor as usual
        getters and setters as usual

Create a class that is comprised of the case, the monitor and the motherboard.
    Instantiate a motherboard, instantiate a monitor, and instantiate a case.

    Instantiate pc and pass in the three classes (motherboard, monitor, case);

    ~~fields~~:
        ~~private motherboard~~
        ~~private monitor~~
        ~~private case~~