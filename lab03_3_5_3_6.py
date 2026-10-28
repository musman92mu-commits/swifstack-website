from collections import deque


class Node:
    def __init__(self, state, parent=None, action=None, path_cost=0):
        self.state     = state
        self.parent    = parent
        self.action    = action
        self.path_cost = path_cost

    def __repr__(self):
        return f"Node(state={self.state}, action={self.action}, cost={self.path_cost})"

    def solution(self):
        path = []
        node = self
        while node:
            path.append((node.action, node.state))
            node = node.parent
        path.reverse()
        return path

    def __eq__(self, other):
        return isinstance(other, Node) and self.state == other.state

    def __hash__(self):
        return hash(self.state)


def get_neighbors_8puzzle(state):
    state = list(state)
    blank = state.index(0)
    row, col = divmod(blank, 3)
    moves = {
        'UP':    (-1,  0),
        'DOWN':  ( 1,  0),
        'LEFT':  ( 0, -1),
        'RIGHT': ( 0,  1),
    }
    result = []
    for action, (dr, dc) in moves.items():
        nr, nc = row + dr, col + dc
        if 0 <= nr < 3 and 0 <= nc < 3:
            new_state = state[:]
            new_blank = nr * 3 + nc
            new_state[blank], new_state[new_blank] = new_state[new_blank], new_state[blank]
            result.append((action, tuple(new_state)))
    return result


def bfs(initial_state, goal_state):
    root          = Node(state=initial_state, parent=None, action=None, path_cost=0)
    frontier      = deque([root])
    frontier_set  = {initial_state}
    explored      = set()

    while frontier:
        node = frontier.popleft()
        frontier_set.discard(node.state)

        if node.state == goal_state:
            return node

        explored.add(node.state)

        for action, child_state in get_neighbors_8puzzle(node.state):
            if child_state not in explored and child_state not in frontier_set:
                child = Node(
                    state     = child_state,
                    parent    = node,
                    action    = action,
                    path_cost = node.path_cost + 1
                )
                frontier.append(child)
                frontier_set.add(child_state)

    return None


def print_board(state):
    for i in range(3):
        row = [str(state[i*3+j]) if state[i*3+j] != 0 else '_' for j in range(3)]
        print("  " + " ".join(row))


def main():
    initial = (3, 4, 1, 2, 5, 6, 7, 8, 0)
    goal    = (1, 2, 3, 4, 5, 6, 7, 8, 0)

    print("=" * 45)
    print("Section 3.5 — Node Infrastructure")
    print("=" * 45)
    root = Node(state=initial, parent=None, action=None, path_cost=0)
    print(f"Root node:")
    print(f"  STATE     : {root.state}")
    print(f"  PARENT    : {root.parent}")
    print(f"  ACTION    : {root.action}")
    print(f"  PATH-COST : {root.path_cost}")

    print("\nExpanding root — child nodes:")
    for action, child_state in get_neighbors_8puzzle(initial):
        child = Node(state=child_state, parent=root, action=action, path_cost=1)
        print(f"  {child}")

    print("\n" + "=" * 45)
    print("Section 3.6 — Breadth First Search (BFS)")
    print("=" * 45)
    print("Initial State:")
    print_board(initial)
    print("Goal State:")
    print_board(goal)
    print()

    result = bfs(initial, goal)

    if result:
        solution = result.solution()
        print(f"Solution found in {result.path_cost} moves:\n")
        for step, (action, state) in enumerate(solution):
            act_str = f"Action: {action}" if action else "Start"
            print(f"Step {step:2d} | {act_str}")
            print_board(state)
            print()
        print(f"Total path cost : {result.path_cost}")
        print(f"Actions sequence: {[a for a, _ in solution if a]}")
    else:
        print("No solution found.")


if __name__ == "__main__":
    main()
