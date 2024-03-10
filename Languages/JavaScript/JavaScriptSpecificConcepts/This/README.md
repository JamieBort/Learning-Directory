# This

Found this https://stackoverflow.com/a/48121962/8210460

after searching for [JavaScript avoid using bind()](https://www.google.com/search?q=JavaScript+avoid+using+bind()&oq=JavaScript+avoid+using+bind()&aqs=chrome..69i57.8069j0j7&sourceid=chrome&ie=UTF-8)

as a result of this `this` in 
```
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			id: 0, // I added this.
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
```

which is from this [Form](https://github.com/JamieBort/LearningDirectory/blob/master/JavaScript/Libraries/Redux/ReactReduxTutorialforBeginnersTheCompleteGuide2020/06/react-redux-tutorial/src/js/components/Form.js).js file.

Other things to study:

* https://stackoverflow.com/a/10115970/8210460

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

* [JavaScript this bind exercises](https://www.google.com/search?q=JavaScript+this+bind+exercises&sxsrf=AOaemvJRhSRnP3aJllLF_lBzAtQAWLqDNg%3A1636734744903&ei=GJeOYam-Nq-s_Qa4lIvABg&oq=JavaScript+this+bind+exercises&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEM0CMgUIABDNAjIFCAAQzQI6BwgAEEcQsAM6BAgjECc6BggAEAcQHkoECEEYAFCnBFipCGDpDWgBcAJ4AIAB0wGIAf8FkgEFMS4yLjKYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwipqr6IoJP0AhUvVt8KHTjKAmgQ4dUDCA8&uact=5) internet search.
    * https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript