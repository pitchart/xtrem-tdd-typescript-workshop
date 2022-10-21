# Xtrem TDD Workshop - Typescript edition

Here is the pitch of it :

```markdown
You have probably already heard or practiced Test-Driven Development (TDD) but have you already tried it in an Xtrem way?

What do we mean by Xtrem?
We propose to practice TDD on a kata using mob programming and introducing different constraints that you will pick randomly. We expect you to find smart ways to overcome those constraints.

Those constraints can be of different types : Design, Testing, Practice, Architecture.

Here are some example of constraints that we have documented on our website :
- Use TCR workflow (Test && Commit || Revert)
- Use a Test DataBuilder
- Check your dependency freshness with libyear
- Write only pure functions
- Make at least 2 refactorings after a passing test
- Write your next test using Approval Testing approach
- Check the quality of your tests with Mutation Testing
- and much more ...

By overcoming those constraints you will learn new ways of designing your code that you will be able to use in your day-to-day.
```

![Welcome](docs/img/xtrem-tdd-logo.png)

## Prerequisites
You need to have [nodejs](https://nodejs.org/en/) >= 16 and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (or whatever new node package manager created since the creation of this repository ;) installed :

### Install dependencies

```bash
npm i
```

### Run tests

```bash
npm test
```

#### Workshop structure
We have structured this workshop using the [4C model](https://www.bowperson.com/2017/11/reposting-a-quick-guide-to-the-4cs-map/) :

- `Connection` : Help learners make connections with the topic of the workshop
- `Concepts` : Direct instruction, lecture or presentation part
- `Concrete Practice` : Learners actively practice a new skill using the new information
- `Conclusion` :  Learners summarize what they have learned

## Workshop
- [Connection](docs/4c/connection.md)
- [Concepts](docs/4c/concepts.md)
- [Concrete Practice](docs/4c/concrete-practice.md)
- [Conclusion](docs/4c/conclusion.md)

*This workshop has been created 
by [Yoan Thirion](https://github.com/ythirion) and [Guillaume Faas](https://github.com/Tr00d) 
for [Agilille 2022](https://agilille.fr/) conference.*
