.PHONY: setup

setup:
	mkdir -p $(filter-out $@,$(MAKECMDGOALS))
	cd $(filter-out $@,$(MAKECMDGOALS)) && npm init -y
	cd $(filter-out $@,$(MAKECMDGOALS)) && npm i -D typescript ts-node
	cd $(filter-out $@,$(MAKECMDGOALS)) && npm i -D @types/node
	cd $(filter-out $@,$(MAKECMDGOALS)) && mkdir -p src/utils
	cd $(filter-out $@,$(MAKECMDGOALS)) && touch src/index.ts src/utils
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '{' > tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t"compilerOptions": {' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"target": "es5",' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"module": "commonjs",' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"moduleResolution": "node",' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"baseUrl": "./",' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"paths": {"*": ["node_modules/*"]},' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"sourceMap": true,' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"outDir": "./dist",' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"downlevelIteration": true,' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"esModuleInterop": true,' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"forceConsistentCasingInFileNames": true,' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"strict": true,' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"noImplicitAny": true,' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t\t"skipLibCheck": true' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t},' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t"include": ["./src/**/*"],' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '\t"exclude": ["node_modules"]' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && echo '}' >> tsconfig.json
	cd $(filter-out $@,$(MAKECMDGOALS)) && node -e "const p=require('./package.json');p.scripts={...p.scripts,dev:'ts-node src',build:'tsc && node dist'};require('fs').writeFileSync('package.json',JSON.stringify(p,null,2))"

%:
	@: