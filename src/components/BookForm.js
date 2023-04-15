function BookForm() {
  return (
    <>
      <h2>Add Books</h2>
      <form>
        <input type="text" placeholder="Enter your title:" />
        <input type="text" placeholder="Enter your author:" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookForm;
