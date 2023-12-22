// import React, { useState } from 'react';

// export default function TodoList() {
// 	const [todos, setTodos] = useState<string[]>([]);
// 	const [task, setTask] = useState<string>('');
// 	const [editIndex, setEditIndex] = useState<number | null>(null);
// 	const [editValue, setEditValue] = useState<string>('');

// 	const addTodo = (e: any) => {
// 		if (task) {
// 			e.preventDefault();
// 			setTodos([...todos, task]);
// 			setTask('');
// 		}
// 	};

// 	const deleteTodo = (index: number) => {
// 		setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
// 		if (editIndex === index) {
// 			setEditIndex(null);
// 			setEditValue('');
// 		}
// 	};

// 	const editTodo = (index: number, value: string) => {
// 		setEditIndex(index);
// 		setEditValue(value);
// 	};

// 	const saveEdit = () => {
// 		if (editIndex !== null && editValue !== '') {
// 			const newTodos = [...todos];
// 			newTodos[editIndex] = editValue;
// 			setTodos(newTodos);
// 			setEditIndex(null);
// 			setEditValue('');
// 		}
// 	};

// 	const cancelEdit = () => {
// 		setEditIndex(null);
// 		setEditValue('');
// 	};
// 	return (
// 		<div className="flex  flex-col items-center justify-center py-24">
// 			<h1 className="text-[blue] text-[30px] font-bold">Todo App</h1>
// 			<form className="flex">
// 				<div className="w-72">
// 					<div className="relative w-full min-w-[200px] h-10">
// 						<input
// 							type="text"
// 							value={task}
// 							onChange={(e) => setTask(e.target.value)}
// 							className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
// 							placeholder=""
// 						/>
// 						<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
// 							Add a new task
// 						</label>
// 					</div>
// 				</div>
// 				<button
// 					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ms-3 rounded-full"
// 					onClick={addTodo}
// 				>
// 					Add
// 				</button>
// 			</form>
// 			<table>
// 				<thead>
// 					<th className="text-[20px] mt-3">Todos:</th>
// 				</thead>
// 				<tbody>
// 					{todos.map((todo, index) => (
// 						<tr>
// 							<td key={index}>
// 								{editIndex === index ? (
// 									<>
// 										<input
// 											type="text"
// 											value={editValue}
// 											className="peer w-48 h-full mt-3 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
// 											onChange={(e) => setEditValue(e.target.value)}
// 										/>
// 										<button
// 											className="bg-teal-400  ms-2  text-white h-9  px-4 rounded-full"
// 											onClick={saveEdit}
// 										>
// 											Save
// 										</button>
// 										<button
// 											className="bg-yellow-400  ms-2  text-white h-9  px-4 rounded-full"
// 											onClick={cancelEdit}
// 										>
// 											Cancel
// 										</button>
// 									</>
// 								) : (
// 									<>
// 										{index + 1} <span className="me-2">)</span>
// 										{todo}
// 										<button
// 											className="bg-green-500  ms-2  text-white h-9  px-4 rounded-full"
// 											onClick={() => editTodo(index, todo)}
// 										>
// 											Edit
// 										</button>
// 										<button
// 											className="bg-red-500  ms-2  text-white h-9  px-4 rounded-full"
// 											onClick={() => deleteTodo(index)}
// 										>
// 											Delete
// 										</button>
// 									</>
// 								)}
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }
import React, { Component, FormEvent, ChangeEvent } from 'react';

interface TodoListState {
	todos: string[];
	editIndex: number | null;
	editValue: string;
	inputValue: string;
}

class TodoList extends Component<{}, TodoListState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			todos: [],
			editIndex: null,
			editValue: '',
			inputValue: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		const inputValue = event.target.value;
		this.setState({ inputValue });

		if (this.state.editIndex !== null) {
			this.setState({ editValue: inputValue, inputValue: '' });
		}
	}

	addTodo = (e: FormEvent) => {
		e.preventDefault();
		const { todos } = this.state;
		if (this.state.inputValue) {
			this.setState({
				todos: [...todos, this.state.inputValue],
				inputValue: '',
			});
		}
	};

	deleteTodo = (index: number) => {
		const { editIndex } = this.state;
		this.setState((prevState) => ({
			todos: prevState.todos.filter((_, i) => i !== index),
			editIndex: editIndex === index ? null : editIndex,
			editValue: '',
		}));
	};

	editTodo = (index: number, value: string) => {
		this.setState({
			editIndex: index,
			editValue: value,
		});
	};

	saveEdit = () => {
		const { editIndex, editValue, todos } = this.state;
		if (editIndex !== null && editValue !== '') {
			const newTodos = [...todos];
			newTodos[editIndex] = editValue;
			this.setState({
				todos: newTodos,
				editIndex: null,
				editValue: '',
			});
		}
	};

	cancelEdit = () => {
		this.setState({
			editIndex: null,
			editValue: '',
		});
	};

	render() {
		const { todos, editIndex } = this.state;

		return (
			<div className="flex  flex-col items-center justify-center py-24">
				<h1 className="text-[blue] text-[30px] font-bold">Todo App</h1>
				<form className="flex">
					<div className="w-72">
						<div className="relative w-full min-w-[200px] h-10">
							<input
								type="text"
								value={this.state.inputValue}
								onChange={this.handleInputChange}
								className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
								placeholder=""
							/>
							<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
								Add a new task
							</label>
						</div>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ms-3 rounded-full"
						onClick={this.addTodo}
					>
						Add
					</button>
				</form>
				<table>
					<thead>
						<th className="text-[20px] mt-3">Todos:</th>
					</thead>
					<tbody>
						{todos.map((todo, index) => (
							<tr>
								<td key={index}>
									{editIndex === index ? (
										<>
											<input
												type="text"
												value={this.state.editValue}
												className="peer w-48 h-full mt-3 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
												onChange={this.handleInputChange}
											/>
											<button
												className="bg-teal-400  ms-2  text-white h-9  px-4 rounded-full"
												onClick={this.saveEdit}
											>
												Save
											</button>
											<button
												className="bg-yellow-400  ms-2  text-white h-9  px-4 rounded-full"
												onClick={this.cancelEdit}
											>
												Cancel
											</button>
										</>
									) : (
										<>
											{index + 1} <span className="me-2">)</span>
											{todo}
											<button
												className="bg-green-500  ms-2  text-white h-9  px-4 rounded-full"
												onClick={() => this.editTodo(index, todo)}
											>
												Edit
											</button>
											<button
												className="bg-red-500  ms-2  text-white h-9  px-4 rounded-full"
												onClick={() => this.deleteTodo(index)}
											>
												Delete
											</button>
										</>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TodoList;
