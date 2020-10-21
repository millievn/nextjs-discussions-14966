start:
	docker build -t xiaoqi/discussions14966 .
	docker run --rm --name discussions14966 -p 5000:3000 --env BASE_URL_BOTH='both server and client' --env BASE_URL_ONLY='only server' xiaoqi/discussions14966