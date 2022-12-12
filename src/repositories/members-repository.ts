export abstract class TeamMembersRepository{
    abstract create(name:string, memberFunction:string): Promise<void>
}