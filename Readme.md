- Some tools and softwares can be installed manually from within the dev container
- Softwares installed manually will be lost on when the container is rebuilt
- So instead manually installing those, we can either
- 1. **postCreateCommand** - pass the commands to *postCreateCommand* prop which will execute every time the container is rebuild
- 2. **Custom Docker** - It will be faster as compared to *postCreateCommand* as it makes use of use of build cache. However as Dockerfile runs before dev container is created, so it can't execute scripts defined in working directory; it is best for installing packages and tools independent of workspace.