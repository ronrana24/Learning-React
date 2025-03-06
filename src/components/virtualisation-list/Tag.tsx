export default function Tag({ name }: { name: string }) {
    return (
        <div className="tag">
          <p>{name}</p>
        </div>
      );
}
