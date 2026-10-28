from collections import deque


# ============================================================
# Exercise 3.1 - 8-Puzzle Problem (State Space as Tree)
# ============================================================

INITIAL_STATE = (3, 4, 1, 2, 5, 6, 7, 8, 0)
GOAL_STATE    = (1, 2, 3, 4, 5, 6, 7, 8, 0)

def get_neighbors_8puzzle(state):
    state = list(state)
    blank = state.index(0)
    row, col = divmod(blank, 3)
    moves = []
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    for dr, dc in directions:
        nr, nc = row + dr, col + dc
        if 0 <= nr < 3 and 0 <= nc < 3:
            new_state = state[:]
            new_blank = nr * 3 + nc
            new_state[blank], new_state[new_blank] = new_state[new_blank], new_state[blank]
            moves.append(tuple(new_state))
    return moves

def bfs_8puzzle(initial, goal):
    queue = deque([(initial, [initial])])
    visited = {initial}
    while queue:
        state, path = queue.popleft()
        if state == goal:
            return path
        for neighbor in get_neighbors_8puzzle(state):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None

def print_board(state):
    for i in range(3):
        row = []
        for j in range(3):
            val = state[i * 3 + j]
            row.append('_' if val == 0 else str(val))
        print(' '.join(row))
    print()

def solve_8puzzle():
    print("=" * 40)
    print("Exercise 3.1 - 8-Puzzle Problem")
    print("=" * 40)
    print("Initial State:")
    print_board(INITIAL_STATE)
    print("Goal State:")
    print_board(GOAL_STATE)

    solution = bfs_8puzzle(INITIAL_STATE, GOAL_STATE)
    if solution:
        print(f"Solution found in {len(solution) - 1} moves:\n")
        for step, state in enumerate(solution):
            print(f"Step {step}:")
            print_board(state)
    else:
        print("No solution found.")


# ============================================================
# Exercise 3.2 - Decision Tree (Animal Identifier)
# ============================================================

class DecisionNode:
    def __init__(self, question=None, yes=None, no=None, answer=None):
        self.question = question
        self.yes = yes
        self.no = no
        self.answer = answer

def build_animal_tree():
    return DecisionNode(
        question="Does it have 4 legs?",
        yes=DecisionNode(
            question="Does it bark?",
            yes=DecisionNode(answer="Dog"),
            no=DecisionNode(
                question="Does it meow?",
                yes=DecisionNode(answer="Cat"),
                no=DecisionNode(
                    question="Does it have a mane?",
                    yes=DecisionNode(answer="Lion"),
                    no=DecisionNode(answer="Horse")
                )
            )
        ),
        no=DecisionNode(
            question="Does it have wings?",
            yes=DecisionNode(
                question="Can it fly?",
                yes=DecisionNode(answer="Eagle"),
                no=DecisionNode(answer="Penguin")
            ),
            no=DecisionNode(
                question="Does it live in water?",
                yes=DecisionNode(answer="Fish"),
                no=DecisionNode(answer="Snake")
            )
        )
    )

def traverse_tree(node, answers, index=0):
    if node.answer:
        return node.answer
    if index >= len(answers):
        return "Unknown"
    response = answers[index].strip().lower()
    if response in ('yes', 'y'):
        return traverse_tree(node.yes, answers, index + 1)
    else:
        return traverse_tree(node.no, answers, index + 1)

def print_tree(node, indent=0):
    prefix = "  " * indent
    if node.answer:
        print(f"{prefix}-> {node.answer}")
        return
    print(f"{prefix}Q: {node.question}")
    print(f"{prefix}  YES:")
    print_tree(node.yes, indent + 2)
    print(f"{prefix}  NO:")
    print_tree(node.no, indent + 2)

def solve_decision_tree():
    print("=" * 40)
    print("Exercise 3.2 - Decision Tree (Animals)")
    print("=" * 40)
    tree = build_animal_tree()
    print("Decision Tree Structure:")
    print_tree(tree)
    print()

    test_cases = [
        (["yes", "yes"],              "Dog"),
        (["yes", "no", "yes"],        "Cat"),
        (["yes", "no", "no", "yes"],  "Lion"),
        (["no", "yes", "yes"],        "Eagle"),
        (["no", "yes", "no"],         "Penguin"),
        (["no", "no", "yes"],         "Fish"),
        (["no", "no", "no"],          "Snake"),
    ]

    print("Test Cases:")
    for answers, expected in test_cases:
        result = traverse_tree(tree, answers)
        status = "PASS" if result == expected else "FAIL"
        print(f"  Answers {answers} -> {result} [{status}]")
    print()


# ============================================================
# Exercise 3.3 - Missionaries and Cannibals Problem
# ============================================================

def is_valid_mc(m, c):
    if m < 0 or c < 0 or m > 3 or c > 3:
        return False
    if m > 0 and m < c:
        return False
    if (3 - m) > 0 and (3 - m) < (3 - c):
        return False
    return True

def get_next_states_mc(state):
    m, c, boat = state
    next_states = []
    moves = [(1, 0), (2, 0), (0, 1), (0, 2), (1, 1)]
    for dm, dc in moves:
        if boat == 1:
            nm, nc, nb = m - dm, c - dc, 0
        else:
            nm, nc, nb = m + dm, c + dc, 1
        if is_valid_mc(nm, nc):
            next_states.append((nm, nc, nb))
    return next_states

def bfs_missionaries_cannibals():
    initial = (3, 3, 1)
    goal    = (0, 0, 0)
    queue   = deque([(initial, [initial])])
    visited = {initial}

    while queue:
        state, path = queue.popleft()
        if state == goal:
            return path
        for next_state in get_next_states_mc(state):
            if next_state not in visited:
                visited.add(next_state)
                queue.append((next_state, path + [next_state]))
    return None

def solve_missionaries_cannibals():
    print("=" * 40)
    print("Exercise 3.3 - Missionaries and Cannibals")
    print("=" * 40)
    print("State format: (Missionaries_left, Cannibals_left, Boat_side)")
    print("Boat: 1=Left Bank, 0=Right Bank\n")

    path = bfs_missionaries_cannibals()
    if path:
        print(f"Solution in {len(path) - 1} moves:\n")
        for i, (m, c, b) in enumerate(path):
            boat_pos = "Left" if b == 1 else "Right"
            left  = f"M={m}, C={c}"
            right = f"M={3-m}, C={3-c}"
            print(f"Step {i:2d}: Left=[{left}] | Right=[{right}] | Boat={boat_pos}")
        print(f"\nTotal states explored: {len(path)}")
        print("Efficiency: BFS guarantees shortest path (minimum moves).")
    else:
        print("No solution found.")
    print()


# ============================================================
# Exercise 3.5 - Graph Operations
# ============================================================

graph = {
    'a': ['b', 'c'],
    'b': ['a', 'd', 'e'],
    'c': ['a', 'f'],
    'd': ['b'],
    'e': ['b', 'f'],
    'f': ['c', 'e']
}

def add_edge(g, node1, node2):
    if node2 not in g[node1]:
        g[node1].append(node2)
    if node1 not in g[node2]:
        g[node2].append(node1)

def find_isolated_nodes(g):
    return [node for node, neighbors in g.items() if len(neighbors) == 0]

def find_all_paths(g, start, end, path=None):
    if path is None:
        path = []
    path = path + [start]
    if start == end:
        return [path]
    if start not in g:
        return []
    paths = []
    for node in g[start]:
        if node not in path:
            new_paths = find_all_paths(g, node, end, path)
            paths.extend(new_paths)
    return paths

def find_shortest_path(g, start, end):
    all_paths = find_all_paths(g, start, end)
    if not all_paths:
        return None
    return min(all_paths, key=len)

def solve_graph_operations():
    print("=" * 40)
    print("Exercise 3.5 - Graph Operations")
    print("=" * 40)

    print("a) Degree of every node:")
    for node in sorted(graph):
        print(f"   Node '{node}': degree = {len(graph[node])}")
    print()

    print("b) Adding edge ('d', 'f'):")
    print("   Graph before:")
    for node in sorted(graph):
        print(f"   '{node}': {graph[node]}")
    add_edge(graph, 'd', 'f')
    print("\n   Graph after:")
    for node in sorted(graph):
        print(f"   '{node}': {graph[node]}")
    print()

    print("c) Isolated nodes:")
    isolated_before = find_isolated_nodes({k: v[:] for k, v in {
        'a': ['b', 'c'], 'b': ['a', 'd', 'e'],
        'c': ['a', 'f'], 'd': ['b'],
        'e': ['b', 'f'], 'f': ['c', 'e']
    }.items()})
    isolated_after = find_isolated_nodes(graph)
    print(f"   Before adding edge: {isolated_before if isolated_before else 'None'}")
    print(f"   After  adding edge: {isolated_after  if isolated_after  else 'None'}")
    print("   (No change — both graphs have no isolated nodes)\n")

    print("d) Paths from 'a' to 'e':")
    all_paths = find_all_paths(graph, 'a', 'e')
    for p in all_paths:
        print(f"   {' -> '.join(p)}")
    shortest = find_shortest_path(graph, 'a', 'e')
    print(f"\n   Shortest path: {' -> '.join(shortest)}")
    print()


# ============================================================
# Main
# ============================================================

if __name__ == "__main__":
    solve_8puzzle()
    solve_decision_tree()
    solve_missionaries_cannibals()
    solve_graph_operations()
