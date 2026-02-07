# Exercise 11.1

This exercise explores setting up CI for an application developed in Go (Golang) by a small team.

In the Go ecosystem, there are many well-established tools for an effective CI setup. For linting the most popular choice is the **golangci-lint** which packages multiple linters into one. It is significantly faster than running individual linters and can be easily configured through a YAML file. For the testing setup, Go standard library test package accessed by `go test` works well for this application and doesn't require additional dependencies. It can be used to run automated unit tests with minimal setup. For the building step, there is also a standard library package that can be used with `go build` command. It compiles packages and their dependencies into a single binary, making deployment easy.

GitLab CI/CD is an alternative to GitHub Actions and Jenkins if the team wants to host their code on GitLab. It offers a free tier, suitable for a small project. Azure Pipelines is yet another Microsoft product and can be used for the CI setup. It supports GitHub or Azure Repos as the version control system and also has a free tier. Woodpecker is a CI/CD tool that's lightweight, simple to use and fast. It can integrate with GitHub or GitLab repositories. It is also open-source and free self-hosted alternative.

For the six developer team, a cloud based environment would probably be better because it doesn't require any maintenance. It also scales well for the teams usage and costs should stay minimal because of a small team size. Self-hosted could be a better alternative if there is a massive amount of pull requests and new builds so that server costs becomes cheaper than the cloud option.
