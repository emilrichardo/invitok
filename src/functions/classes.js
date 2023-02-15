export class invitationObj{
    constructor({name, id, category, detail,path}){
        this.name = name;
        this.path = path;
        this.id = id;
        this.category = category;
        this.detail = detail;
    }
}

export class categoryObj{
    constructor({name, id,  path, slug}){
        this.name = name;
        this.path = path;
        this.slug= slug;
        this.id = id;
    }
}