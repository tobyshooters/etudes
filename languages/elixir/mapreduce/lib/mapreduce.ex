defmodule MapReduce do

  @moduledoc """
    TODO:
    - [x] Receive input file
    - [ ] Partition file
    - [ ] Spawn mappers to process file
    - [ ] Join mapper outputs
    - [ ] Spawn reducers
    - [ ] Join reducer outputs
    - [ ] Create output file
  """

  defp process(file) do
    IO.puts file
  end

  defp parse_args(args) do
    {[file: file], _, _} = OptionParser.parse(args,
      switches: [file: :string],
      aliases: [f: :file]
    )
    file
  end

  def main(args) do
    args |> parse_args |> process
  end
end
