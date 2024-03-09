# Personal-Diary

Backend-frontend app with deployment using Kubernetes.

This is an application for keeping personal notes with the ability to create, view, update and delete them. It consists of:

1. The frontend is build using ReactTS, MobX and Vite;
2. The backend is build using NodeJS, Express and mongoose;
3. MongoDB is used as the database.

## Deploy to Kubernetes (Minikube)

### Prequisites

- NodeJS and npm
- Docker
- Minikube
- Kubectl

### Steps

Step 0: Clone the repo

```bash
git clone https://github.com/TaisiaSk/Personal-Diary.git
```

Step 1: Start your local Kubernetes cluster with minikube and create a new namespace called `personal-diary`:

```bash
minikube start

kubectl create namespace personal-diary
kubectl config set-context --current --namespace=personal-diary
```

Step 2: Build docker images of the frontend and backend:

```bash
eval $(minikube docker-env)

docker build -t personal-diary-client:1.0.0 ./frontend
docker build -t personal-diary-server:1.0.0 ./backend
```

Step 3: Deploy the application with the following command:

```bash
kubectl apply -f k8s
```

Step 4: Check that all the pods is running:

```bash
kubectl get pods
```

Step 5: Get the URL for the deployed react application:

```bash
minikube service client-service -n personal-diary
```

Step 6: Open the app in your web browser.

---

#### Additional information

After the application is up and running, you can view logs using the `kubectl logs` command:

```bash
kubectl logs <POD-NAME>
```

`POD-NAME` you can find out using `kubeclt get pods` command.

#### Clean up

Delete all resources:

```bash
kubectl -n personal-diary delete all --all
```

Close down minikube and delete:

```bash
minikube stop
minikube delete
```
